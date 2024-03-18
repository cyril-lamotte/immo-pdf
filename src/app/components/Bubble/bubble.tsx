import React, { useEffect, useState, useId } from 'react';
import { config } from '../../types/Config';
import { useBailContext } from '../../contexts/BailContextProvider';
import { FilePenLine, XCircle, CalendarCheck2 } from 'lucide-react';
import './bubble.scss';

type Props = {
  item: string,
  label?: string,
  widget?: string,
  type?: string,
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

  // Provide default configuration.
  let fieldConfig = config[itemName] ?? {
    label: 'Configuration manquante',
    desc: 'Configuration manquante',
  };

  let label: string | number | React.ReactNode = value;

  let values = config[itemName]?.values;
  if (values) {
    const valueConfig = values.find((item: any) => item.value === value);
    if (valueConfig) {
      label = valueConfig.label;
    }
  }

  if (props.label) {
    label = props.label;
  }

  // Add class to bubble if it's open.
  let bubbleClass = 'bubble';
  if (isOpen) {
    bubbleClass += ' bubble--is-open';
  }

  if (props.type === 'boolean') {
    label = value ? 'Oui' : 'Non';
  }

  if (label === '' || label === undefined) {
    bubbleClass += ' bubble--is-empty';
    label = <FilePenLine />;
  }

  // Default widget is input.
  let widget = config[itemName]?.widget ?? 'input';

  // Override widget if provided.
  if (props.widget) {
    widget = props.widget;
  }

  function handleClick() {
    setIsOpen(!isOpen);
    const bubbleOpenevent = new CustomEvent('onBubbleOpen', { detail: id });
    document.dispatchEvent(bubbleOpenevent);

    // Set focus and select content after delay.
    const input = document.getElementById(id) as HTMLInputElement;
    if (!input) return;
    setTimeout(() => {
      input.select();
      input.focus();
    }, 1);
  }

  function onSetToday() {
    const input = document.getElementById(id) as HTMLInputElement;
    input.value = new Date().toISOString().split('T')[0];
    input.dispatchEvent(new Event('input', { bubbles: true }));
  }

  function handleOver() {
    console.log(fieldConfig.label);
  }

  function onInput(e: React.ChangeEvent<HTMLInputElement>) {
    let value = e.target.value;
    if (props.type === 'boolean' && e.target.type === 'checkbox') {
      value = e.target.checked;
    }

    if (props.type === 'int') {
      value = isNaN(parseInt(value)) ? '' : parseInt(value);
    }

    setValue(value);
  }

  function onClear() {
    const resetValue = props.type === 'int' ? undefined : '';
    setValue(resetValue);
    const input = document.getElementById(id) as HTMLInputElement;
    input.focus();
  }

  function setValue(value: any) {
    // Clone tenant object.
    const bailClone = JSON.parse(JSON.stringify(bail));
    bailClone[itemName] = value;
    save(bailClone);
  }

  return (
    <span className={ bubbleClass } onMouseDown={(e) => e.stopPropagation()}>
      <button type="button" className="bubble__editable" onClick={handleClick} onMouseOver={handleOver}>{label}</button>
      <span className="bubble__form">
        <label htmlFor={id} className="bubble__label">{ fieldConfig.label }</label>

        <span className="im-input-wrap">
          { widget === 'input' && <>
            <input autoFocus={true} type="text" name={itemName} id={id} value={value} onInput={onInput} />
          </> }

          { widget === 'date' && <>
            <input autoFocus={true} type="date" name={itemName} id={id} value={value} onInput={onInput} />
          </> }

          { widget === 'textarea' && <>
            <textarea autoFocus name={itemName} id={id} value={value} onChange={e => setValue(e.target.value)} />
          </> }

          { widget === 'checkbox' && <>
            <input autoFocus={true} type="checkbox" name={itemName} id={id} defaultChecked={value} onInput={onInput} />
            <label htmlFor={id} className="">{ fieldConfig.label }</label>
          </> }

          { widget === 'radios' && <>
            { config[itemName]?.values?.map((item: any, index: any) => {
              return <span key={index}>
                <input autoFocus={true} type="radio" name={itemName} id={id + index} value={item.value} onInput={onInput} />
                <label htmlFor={id + index}>{item.label}</label>
              </span>
            }) }
          </> }

          { widget !== 'date' && widget !== 'checkbox' && widget !== 'radios' &&
            <button type="button" className="im-input-clear" onClick={onClear}><XCircle /><span className="visually-hidden">Vider</span></button>
          }

        </span>


        { widget === 'date' && <>
          <button type="button" className="im-btn" onClick={onSetToday}><CalendarCheck2 /> aujourd&apos;hui</button>
        </> }

        <span className="bubble__desc">{ fieldConfig.desc }</span>
      </span>
    </span>
  )
}
