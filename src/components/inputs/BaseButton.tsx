import IconSEND from '../../media/icons/iconSEND.png'

interface props{
  label: string;
}

const BaseButton = function(props:props){

  return(
    <button className="baseButton">
      <img src={IconSEND} alt="" />
      <p>
      {props.label}

      </p>
    </button>
  )
}

export default BaseButton;