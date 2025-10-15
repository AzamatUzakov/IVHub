"use client"
import Logo from '../../public/logo.png';
import Image from "next/image";
import { FaRegCommentDots } from 'react-icons/fa';
import { IoClose, IoEyeOutline } from "react-icons/io5";
import { PiShareFat } from 'react-icons/pi';

const PostBlock: React.FC = () => {
    return (
        <div>

            <div className='border border-[#0D0D0DF7] rounded-[10px] mt-[17px] py-[10px] px-[15px]'>
                <div className='flex flex-row items-center w-full gap-x-[10px] py-[11px]'>
                    <Image src={Logo} alt="logo" className='w-[64px] h-[64px] rounded-[50%]' width={64} height={64} />
                    <div className='flex flex-col items-start'>
                        <span className='font-[400] text-[18px] font-[Unbounded] text-[var(--black)]'>Халитов Аяз</span>
                        <span className='font-[400] text-[14px] font-[Unbounded] text-[var(--color3)]'>Стдудент 09-564</span>

                    </div>
                </div>

                <img alt='santa' src={"/santa.png"} className='w-full h-auto' />

                <ol className='list-decimal list-inside text-sm text-[#111827] mt-[10px]'>
                    <li>Отборы в сборные института</li>
                    <li>Спартакиада КФУ среди первокурсников</li>
                    <li> Спартакиада КФУ среди студентов и аспирантов</li>
                </ol>

                <div className='flex items-center text-sm gap-2 cursor-pointer bg-[#7878801F] max-w-fit py-1.5 px-2 mt-2 rounded-[8px]'>
                    Презинтация.pdf <IoClose color='#3C3C43B8' />

                </div>
                <div className='flex gap-2 mt-3 cursor-pointer items-center'>
                    <p className='bg-[#00539F] w-fit flex justify-center items-center gap-1 text-white text-[12px] font-light p-2 rounded-[10px] h-[35px]'>❤️ 51</p>
                    <p className='bg-[#00539F] w-fit flex justify-center items-center gap-1 text-white text-[12px] font-light p-2 rounded-[10px] h-[35px]'><FaRegCommentDots />12 комментов</p>
                    <p className='bg-[#00539F] flex justify-center items-center gap-1 text-white text-[15px] font-light p-2 rounded-[10px] w-[40px] h-[35px]'><PiShareFat /></p>
                    <p className='flex items-center gap-1 text-[12px]'><IoEyeOutline size={"17px"} /> 5124</p>
                </div>
            </div>



        </div>
    );
}

export default PostBlock;