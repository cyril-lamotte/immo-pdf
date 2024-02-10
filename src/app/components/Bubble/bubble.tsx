import { useContext, useEffect, useState, useId } from 'react';
import { TenantContext } from '../../contexts/TenantContext.js';
import './bubble.scss';

export default function Bubble(props: { item: string, widget?: string, type?: string}) {
  const [isOpen, setIsOpen] = useState(false);
  const { tenant, setTenant } = useContext(TenantContext);

  useEffect(() => {
    // Listen to hide event to close bubble.
    document.addEventListener('onBubbleHide', (e) => {
      if (e.detail !== id) {
        setIsOpen(false);
      }
    });
  }, []);

  const value = tenant[props.item].value;

  let widget = 'input';
  if (props.widget) {
    widget = props.widget;
  }

  // Generate bubble unique id.
  const id = useId();

  // Add class to bubble if it's open.
  let bubbleClass = 'bubble';
  if (isOpen) {
    bubbleClass += ' bubble--is-open';
  }

  function handleClick() {
    setIsOpen(!isOpen);
    const event = new CustomEvent('onBubbleOpen', { detail: id });
    document.dispatchEvent(event);
  }

  function setValue(value: any) {
    if (props.type === 'int') {
      value = parseInt(value);
    }

    // Clone tenant object.
    const tenantClone = JSON.parse(JSON.stringify(tenant));
    tenantClone[props.item].value = value
    setTenant(tenantClone);
  }

  return (
    <span className={ bubbleClass }>
      <button type="button" className="bubble__editable" onClick={handleClick}>{value}</button>
      <span className="bubble__form">
        <label htmlFor={id} className="bubble__label">{ tenant[props.item].label }</label>

        { widget === 'input' && <input type="text" name={props.item} id={id} defaultValue={value} onChange={e => setValue(e.target.value)} />}
        { widget === 'textarea' && <textarea name={props.item} id={id} defaultValue={value} onChange={e => setValue(e.target.value)} />}

        <span className="bubble__desc">{ tenant[props.item].desc }</span>
      </span>
    </span>
  )
}
