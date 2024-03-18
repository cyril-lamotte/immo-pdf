import React from 'react';
import { config } from '@/app/types/Config';
import Bubble from '../Bubble/bubble';

type Props = {
  itemList: Array<string>,
}

export default function DataSet(props: Props) {

  return (
    <aside>
      <table>
        { props.itemList.map((key) => (
          <tr key={key}>
            <th>{config[key].label}</th>
            <td><Bubble item={key} /></td>
          </tr>
        ))}
      </table>
    </aside>
  )
}
