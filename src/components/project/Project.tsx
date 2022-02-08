import './Project.scss';
import IconLINK from '../../media/icons/iconLINK.png';
import Tag from './Tag'

interface props{
  img1: string;
  img2: string;
  img3: string;
  title: string;
  desc: string;
  to: string;
  tags?: Array<string>;
}

const Project = function(props:props){

  return(
    <div className='project'>

      <div className='project_grid'>
        <div className='project_grid_content'>
          <div>
            <a href={props.to} target="_blank" className='title'>{props.title} <img src={IconLINK} alt="LINK" /></a>
            <p className='desc'>{props.desc}</p>
          </div>

          <div className='project_grid_content_tags'>
            {
              props.tags?.map( tag => {
                return <Tag value={tag} />
              })
            }
          </div>
        </div>
        <div className='project_grid_images'>
          <img src={props.img1} alt="dbs1" />
          <img src={props.img2} alt="dbs2" />
          <img src={props.img3} alt="dbs3" />
        </div>

      </div>

    </div>
  )
}

export default Project;