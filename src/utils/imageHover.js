import{ useState } from 'react';
import GitHubBlack from '../common/image/Github_black.svg';
import GitHubBlue from '../common/image/mark-github.svg'
import GitHubWhite from '../common/image/GithubWhite.svg'
import LinkedInBlack from '../common/image/LinkedIN.svg';
import LinedInWhite from '../common/image/LinkedINWhite.svg';
import { useSelector } from 'react-redux';


export function ImageHover() {
  const [hovered, setHovered] = useState(false);
  const theme = useSelector(state => state.theme); 

  let imgSource
  if (theme === 'light') {
    imgSource = hovered ? GitHubBlue : LinkedInBlack;
  } else {
    imgSource = hovered ? GitHubBlue: GitHubBlack;
  }
  
  return (
    <img 
      src={imgSource} 
      onMouseEnter={() => setHovered(true)} 
      onMouseLeave={() => setHovered(false)} 
    />
  );
}
