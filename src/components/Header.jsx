import logo from '../assets/Group 3585.png'
import insta from '../assets/Instagram.png'
import twitter from '../assets/Twitter.png'
import facebook from '../assets/Facebook.png'
import linkedIn from '../assets/Linkedin.png'
import arrow from '../assets/Vector.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'



const Header = ({ description, img }) => {

    const [showMembers, setShowMembers] = useState(false)
    const [showPrograms, setShowPrograms] = useState(false)
    const [showPartners, setShowPartners] = useState(false)

    const showMemberMenu = () => {
        setShowMembers(!showMembers)
    }
    const showProgramsMenu = () => {
        setShowPrograms(!showPrograms)
    }
    const showPartnersMenu = () => {
        setShowPartners(!showPartners)
    }

    return (<>
        <div className="px-[45px] bg-background h-[58px] flex justify-between items-center font-montserrat">
            <div><Link to='/'><img src={logo} alt="" className='w-[40px] h-[40px]' /></Link></div>
            <div className='flex gap-5 items-center'>
                <div className='flex items-center gap-[59px] text-[14px] font-montserrat'>
                    <p className=' cursor-pointer'>Terms</p>
                    <p className=' cursor-pointer'>Privacy</p>
                    <p className=' cursor-pointer'>Cookies</p>
                </div>
                <div className='flex'>
                    <a href="/"><img src={facebook} alt="" /></a>
                    <a href="/"><img src={insta} alt="" /></a>
                    <a href="/"><img src={twitter} alt="" /></a>
                    <a href="/"><img src={linkedIn} alt="" /></a>
                </div>
            </div>
        </div>

        <div>
            <div className="pl-[150px] bg-black h-[58px] flex justify-between items-center text-white">
                <ul className='flex justify-between gap-12 text-[14px]'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li onClick={showMemberMenu} className='cursor-pointer'><div>
                        <div className='flex items-center gap-5'><p>Membership Area</p> <img src={arrow} alt="" /></div>
                        {showMembers ? (<div className='absolute top-[115px] bg-black pl-2 pr-10 py-3 rounded border-t'>
                            <p className='pb-4'><Link to='/members'>See Our Members</Link></p>
                            <p><Link to='/joinUs'>Become a Member</Link></p>
                        </div>) : ''}
                    </div>
                    </li>
                    <li onClick={showProgramsMenu} className='cursor-pointer'>
                        <div>
                            <div className='flex items-center gap-5'><p>Programmes and Events</p> <img src={arrow} alt="" /></div>
                            {showPrograms ? (<div className='absolute top-[115px] bg-black pl-2 pr-10 py-3 rounded border-t'>
                                <p className='pb-4'>Programmes</p>
                                <p>Events</p>
                            </div>) : ''}
                        </div>
                    </li>
                    <li onClick={showPartnersMenu} className='cursor-pointer'>
                        <div>
                            <div className='flex items-center gap-5'><p>Partner with Us</p> <img src={arrow} alt="" /></div>
                            {showPartners ? (<div className='absolute top-[115px] bg-black pl-2 pr-10 py-3 rounded border-t'>
                                <p className='pb-4'>See Our Partners</p>
                                <p>Become a Partner</p>
                            </div>) : ''}
                        </div>
                    </li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
        </div>
        <div className={`bg-${img} bg-no-repeat bg-center bg-cover h-[513px] font-montserrat font-[700] text-center flex justify-center items-center pt-30 px-32 text-white`}>
            <h1 className='text-[50px]'>{description}</h1>
        </div>
    </>);
}

export default Header;