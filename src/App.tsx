import { Col, Row } from "antd";
import styles from "./App.module.css"
import CarousleImage from "./components/Carousle/Carousle";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SlideHeader from "./components/SlideMenu/SlideMenu";
function App() {
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles["page-count"]}>
        <Row style={{marginTop:"20px"}}>
          <Col span={6}>
            <div ><SlideHeader/></div>
          </Col>
          <Col span={18}>
          <div >
            <CarousleImage/>
          </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default App;
