import React from 'react';
import { Select } from 'antd';
const { Option } = Select;

export default function() {
    function handleChange(value) {
        console.log(`selected ${value}`);
    }
  return (
        <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>
                Disabled
            </Option>
            <Option value="Yiminghe">yiminghe</Option>
        </Select>
  );
}
// {
//   router.map(item => {
//     return <button key={item.name} onClick={e => window.history.pushState(null, item.name, item.activeRule)}>{item.name}</button>
//   })
// }
