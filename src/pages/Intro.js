import React from 'react';
import { Card } from 'antd';

const Intro = () => {
  return (
    <div >
        <Card
            title="About Me"
            bordered={false}
            style={{
            width: '100%',
            fontSize: "14px"
            }}
        >
            <p>My name is <b style={{fontSize:'22px'}}>Ziyu(Jeffrey) Zhou</b></p>
            <p>I currently work as the <b style={{fontSize:'22px'}}>Sr. Software Developer</b> at Arrow Technology Group/First Nations Technical Services Advisory Group Inc. </p>
            <p>I specialize in full-stack software engineering with python/django framework, React, Redux, Bootstrap, iOS/Android development, Ant Design and SQL/Cloud databases. I am familiar with programming languages Python, Java, JavaScript, TypeScript, C, C++, C# etc. Restful APIs, and large ETL projects.</p>
            <p>I have great time-management and project-management skills to meet strict deadlines etc.</p>
            <p>I graduated with a <b style={{fontSize:'22px'}}>Bachelor of Science, Computer Science Degree( and minor in Economics)</b> at MacEwan University in Edmonton, Canada. Self-motivated and eager to learn anything new in the software development industry.</p>
        </Card>
        
    </div>
  );
};

export default Intro;