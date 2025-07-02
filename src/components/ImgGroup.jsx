import { track } from 'motion/react-client';
import {easeIn, motion} from 'motion/react';
import Img from './Img.jsx';


function ImgGroup() {
    return (
        <div className='group'>
            <Img src="https://i.pinimg.com/736x/ab/b1/54/abb1546c171e8a7515d893bff4257a3a.jpg" left={8} top={10} width={150} />
            <Img src="https://i.pinimg.com/736x/6c/d6/e5/6cd6e5e72f966eb41fe92f5ec815b738.jpg" right={15} top={16} width={150}/>
            <Img src="https://i.pinimg.com/736x/fa/02/ff/fa02ff3987f8d50dfb6792e7b52c3689.jpg" right={34} bottom={12} width={120}/>
            <Img src="https://i.pinimg.com/736x/c5/ad/86/c5ad8653923beeeedbd249116eebbb85.jpg" bottom={0} right={5} width={150}/>
            <Img src="https://i.pinimg.com/736x/95/42/4d/95424d49c7ecb11c2ef4f3b807feeeef.jpg" left={22} bottom={16} width={140}/>
            <Img src="https://i.pinimg.com/736x/83/aa/17/83aa1734a1a1303d2b0f1153baabd259.jpg" left={32} top={2} width={120} />
            <Img src="https://i.pinimg.com/736x/68/e5/fc/68e5fcd35c2be99b6915d774c2673015.jpg" left={3} bottom={-4} width={130}/>
        </div>
    );
}

export default ImgGroup;