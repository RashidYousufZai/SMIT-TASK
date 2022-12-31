import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import img1 from "./web.png";
import img2 from "./web2.jpg";
import img3 from "./web3.jpg";
import img4 from "./web4.jpg";

const { Meta } = Card;

const App: React.FC = () => (
  <div className="contentStyle flex justify-center my-7">
    <Card
      style={{
        width: 300,
        marginLeft: "38px",
      }}
      cover={<img alt="example" src={img1} />}
    >
      <Meta title="Mobile and web app development" />
    </Card>

    <Card
      style={{
        width: 300,
        marginLeft: "38px",
      }}
      cover={<img alt="example" src={img2} />}
    >
      <Meta title="Ai chat bot" />
    </Card>

    <Card
      style={{
        width: 300,
        marginLeft: "38px",
      }}
      cover={<img alt="example" src={img3} />}
    >
      <Meta title="Graphics Designing" />
    </Card>

    <Card
      style={{
        width: 300,
        marginLeft: "38px",
      }}
      cover={<img alt="example" src={img4} />}
    >
      <Meta title="Video Editing" />
    </Card>
  </div>
);

export default App;
