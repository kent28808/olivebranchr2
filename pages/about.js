import ButtonWithText from "../components/ButtonWithText";

export default function about() {
  return (
    <div className='container'>
      <h2 className='heading'>Olive Branch is created by</h2>
      <div className='team-info'>
        <p className='body'> Development </p>
        <h2 className='heading'>Marissa Okazaki</h2>
      </div>

      <div className='team-info'>
        <p className='body'>Product Management</p>
        <h2 className='heading'>Alexander Lee</h2>
      </div>
      <div className='team-info'>
        <p className='body'>Product Design</p>
        <h2 className='heading'>Cheng Guo</h2>
      </div>
      <div className='team-info'>
        <p className='body'>Development</p>
        <h2 className='heading'>Ken T.</h2>
      </div>

      <ButtonWithText innerRef='/' text='Return to home' />
    </div>
  );
}
