import IconSEND from '../../media/icons/iconSEND.png'

interface props{
  label: string;
  type?: string;
  id?: string;
}

const BaseButton = function(props:props){

  return(
    <button className="baseButton" id={props.id}>
      <p> {props.label} </p>
      <img src={IconSEND} alt="" />
    </button>
  )
}

export default BaseButton;