import ItemAccordion from "./ItemAccordion";
import { faqs } from "./dbFaqs";

export default function Accordion() {
  return (
    <div className="accordion">
      {faqs.map((el, i) => (
        <ItemAccordion num={i} title={el.title} description={el.text} />
      ))}
    </div>
  );
}
