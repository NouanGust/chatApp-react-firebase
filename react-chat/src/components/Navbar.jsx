import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Steam Chat</span>
      <div className="user">
        <img src="https://2.bp.blogspot.com/-o-V9B47k4Kg/WfDrDztZfmI/AAAAAAAAB7M/REPss3lqcwYfxxb8u2etCsYVg1Jm_blbQCLcBGAs/s1600/sebastian.jpg" alt="foto do usuario" />
        <span>Sebastian</span>
        <button>Sair</button>
      </div>
    </div>
  )
}

export default Navbar;