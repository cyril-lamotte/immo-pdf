import { useContext, useState, useId } from 'react';
import { TenantContext } from '../../contexts/TenantContext.js';
import './bubble.scss';

export default function Bubble(props: { item: string, widget?: string}) {
  const [isOpen, setIsOpen] = useState(false);
  const { tenant, setTenant } = useContext(TenantContext);

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

  function toggle() {
    setIsOpen(!isOpen);
  }

  function setValue(value: string) {
    const prop = {
      value: value,
      label: tenant[props.item].label,
      desc: tenant[props.item].desc,
    }

    setTenant({ ...tenant, [props.item]: prop });
  }

  return (
    <span className={ bubbleClass }>
      <button type="button" className="bubble__editable" onClick={toggle}>{value}</button>
      <span className="bubble__form">
        <label htmlFor={id} className="bubble__label">{ tenant[props.item].label }</label>

        { widget === 'input' && <input type="text" name={props.item} id={id} defaultValue={value} onChange={e => setValue(e.target.value)} />}
        { widget === 'textarea' && <textarea name={props.item} id={id} defaultValue={value} onChange={e => setValue(e.target.value)} />}

        <span className="bubble__desc">{ tenant[props.item].desc }</span>
      </span>
    </span>
  )
}
