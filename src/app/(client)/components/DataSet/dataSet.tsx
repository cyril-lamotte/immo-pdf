import React, { Fragment } from 'react';
import { config } from '@/app/(client)/types/Config';
import Bubble from '../Bubble/bubble';

type Props = {
  itemList: Array<string>,
}

export default function DataSet(props: Props) {

  return (
    <aside>
      <dl className="im-dl">
        { props.itemList.map((key) => (
          <Fragment key={key}>
            <dt>{config[key].label}</dt>
            <dd><Bubble item={key} /></dd>
          </Fragment>
        ))}
      </dl>
    </aside>
  )
}
