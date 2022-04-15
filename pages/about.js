import ButtonWithText from "../components/ButtonWithText";
import arrow from "../public/arrow.png";

export default function about() {
  return (
    <div className='container'>
      <h3>Olive Branch is created by</h3>
      <div className='team-info'>
        <p> Development </p>
        <h2>Marissa Okazaki</h2>
      </div>

      <div className='team-info'>
        <p>Product Management</p>
        <h2>Alexander Lee</h2>
      </div>
      <div className='team-info'>
        <p>Product Design</p>
        <h2>Cheng Guo</h2>
      </div>
      <div className='team-info'>
        <p>Development</p>
        <h2>Ken T.</h2>
      </div>

      <ButtonWithText
        innerRef='/'
        text='Return to home'
        img={arrow}
        imgClassName={".Vector-7"}
      />
    </div>
  );
}
