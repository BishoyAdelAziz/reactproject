import Sdata from "./sdata"
import "../slide/style.css";
const CardTwo = () => {
  return (
    <div className="CardTwo-top-slide">
      {Sdata.map((value, index) => {
        return (
          <div className="box" key={index}>
            <div className="img img2">
              <img src={value.cover} alt={value.rhode} />
            </div>
            <div className="text">
              <span>{value.category}</span>
              <h2>{value.title}</h2>
              <p>{value.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default CardTwo;

