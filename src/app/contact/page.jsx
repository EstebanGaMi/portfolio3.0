import { Navbar } from "../components/Navbar";
import { Form } from "../components/Form";
import SocialNetworks from "../components/SocialBar";

const Contact = () => {
  return (
    <section className="z-50">
      <Navbar />
      <Form />
      <SocialNetworks />
    </section>
  );
};

export default Contact;
