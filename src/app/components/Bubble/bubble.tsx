import React, { useEffect, useState, useId } from 'react';
import { config } from '../../types/Config';
import { useBailContext } from '../../contexts/BailContextProvider';
import './bubble.scss';

type Props = {
  item: string,
  label?: string,
  widget?: string,
  type?: string
}

export default function Bubble(props: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const { bail, setBail, save } = useBailContext();

  // Generate bubble unique id.
  const id = useId();

  useEffect(() => {
    // Listen to hide event to close bubble.
    document.addEventListener('onBubbleHide', (e) => {
      const event = e as CustomEvent;
      if (event.detail !== id) {
        setIsOpen(false);
      }
    });
  }, [id]);

  const itemName = props.item as keyof typeof config;
  const value = bail[itemName];

  let label = value;
  if (props.label) {
    label = props.label;
  }

  if (!label) {
    label = 'À compléter';
  }

  let widget = 'input';
  if (props.widget) {
    widget = props.widget;
  }

  // Add class to bubble if it's open.
  let bubbleClass = 'bubble';
  if (isOpen) {
    bubbleClass += ' bubble--is-open';
  }

  function handleClick() {
    setIsOpen(!isOpen);
    const bubbleOpenevent = new CustomEvent('onBubbleOpen', { detail: id });
    document.dispatchEvent(bubbleOpenevent);

    // Set focus and select content after delay.
    const input = document.getElementById(id) as HTMLInputElement;
    setTimeout(() => {
      input.select();
      input.focus();
    }, 1);
  }

  function setValue(value: any) {
    if (props.type === 'int') {
      value = parseInt(value);
    }

    // Clone tenant object.
    const bailClone = JSON.parse(JSON.stringify(bail));
    bailClone[itemName] = value;
    save(bailClone);
  }

  return (
    <span className={ bubbleClass } onMouseDown={(e) => e.stopPropagation()}>
      <button type="button" className="bubble__editable" onClick={handleClick}>{label}</button>
      <span className="bubble__form">
        <label htmlFor={id} className="bubble__label">{ config[itemName].label }</label>

        { widget === 'input' && <input autoFocus={true} type="text" name={itemName} id={id} defaultValue={value} onChange={e => setValue(e.target.value)} />}
        { widget === 'textarea' && <textarea autoFocus name={itemName} id={id} defaultValue={value} onChange={e => setValue(e.target.value)} />}

        <span className="bubble__desc">{ config[itemName].desc }</span>
      </span>
    </span>
  )
}
