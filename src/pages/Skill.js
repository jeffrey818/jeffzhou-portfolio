import React from 'react';
import { Card, Descriptions } from 'antd';
import { items } from './helper/SkillItems';

const Skill = () => {
  return (
    <div>
      <Card
            title="My Skills"
            bordered={false}
            style={{
            width: '100%',
            fontSize: "14px"
            }}
        >
            <Descriptions  
                layout="vertical" 
                items={items}
                column={1}>
            </Descriptions>
        </Card>
    </div>
  );
};

export default Skill;