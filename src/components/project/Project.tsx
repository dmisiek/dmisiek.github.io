import './Project.scss';

import IconLINK from '../../media/icons/iconLINK.png';
import IconREACT from '../../media/icons/iconREACT.png';
import IconCSS from '../../media/icons/iconCSS.png';
import IconJS from '../../media/icons/iconJS.png';
import IconHTML from '../../media/icons/iconHTML.png';

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

  const getIcon = (name: string) => {
    switch(name as any){
      case "REACT": return IconREACT;
      case "CSS": return IconCSS;
      case "JS": return IconJS;
      case "HTML": return IconHTML;
      default: return "";
    }
  }

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

                return <h1 className='tag'><img src={getIcon(tag)} alt={tag} />{tag}</h1>
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