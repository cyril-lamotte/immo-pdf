import { useContext, useEffect, useState, useId } from 'react';
import { config } from '../../types/Config';
import { BailContext } from '../../contexts/BailContext';
import './bubble.scss';

type Props = {
  item: string,
  label?: string,
  widget?: string,
  type?: string
}

export default function Bubble(props: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const { bail, setBail } = useContext(BailContext);

  useEffect(() => {
    // Listen to hide event to close bubble.
    document.addEventListener('onBubbleHide', (e) => {
      if (e.detail !== id) {
        setIsOpen(false);
      }
    });
  }, []);

  const value = bail[props.item];

  let label = value;
  if (props.label) {
    label = props.label;
  }

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
    const bailClone = JSON.parse(JSON.stringify(bail));
    bailClone[props.item] = value
    setBail(bailClone);
  }

  return (
    <span className={ bubbleClass } onClick={(e) => e.stopPropagation()}>
      <button type="button" className="bubble__editable" onClick={handleClick}>{label}</button>
      <span className="bubble__form">
        <label htmlFor={id} className="bubble__label">{ config[props.item].label }</label>

        { widget === 'input' && <input type="text" name={props.item} id={id} defaultValue={value} onChange={e => setValue(e.target.value)} />}
        { widget === 'textarea' && <textarea name={props.item} id={id} defaultValue={value} onChange={e => setValue(e.target.value)} />}

        <span className="bubble__desc">{ config[props.item].desc }</span>
      </span>
    </span>
  )
}
