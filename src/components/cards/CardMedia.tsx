import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
// import img1 from "./web.png";
// import img2 from "./web2.jpg";
// import img3 from "./web3.jpg";
// import img4 from "./web4.jpg";

import med1 from "./med1.jpg";
import med2 from "./med2.jpg";
import med3 from "./med3.jpg";
import med5 from "./med5.jpg";

const { Meta } = Card;

const App: React.FC = () => (
  <div className="contentStyle flex justify-center my-7">
    <Card
      style={{
        width: 300,
        marginLeft: "38px",
      }}
      cover={<img alt="example" src={med1} />}
    >
      <Meta title="tecno Kid admission All over the pakistan" />
    </Card>

    <Card
      style={{
        width: 300,
        marginLeft: "38px",
      }}
      cover={<img alt="example" src={med2} />}
    >
      <Meta title="Ai chat bot" />
    </Card>

    <Card
      style={{
        width: 300,
        marginLeft: "38px",
      }}
      cover={<img alt="example" src={med3} />}
    >
      <Meta title="Graphics Designing" />
    </Card>

    <Card
      style={{
        width: 300,
        marginLeft: "38px",
      }}
      cover={<img alt="example" src={med5} />}
    >
      <Meta title="Video Editing" />
    </Card>
    
  </div>
);

export default App;
