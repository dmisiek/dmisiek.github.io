import IconSEND from '../../media/icons/iconSEND.png'

interface props{
  label: string;
  type?: string;
}

const BaseButton = function(props:props){

  return(
    <button className="baseButton">
      <p> {props.label} </p>
      <img src={IconSEND} alt="" />
    </button>
  )
}

export default BaseButton;