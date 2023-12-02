import React from 'react'


// to display the form
export default function Form() {
  return (
    <>
        <div className='container mt-2'>
            <div>
                <label style={{ fontSize: '16px', fontWeight: 'bold'  }}>Your HTML</label>
                <textarea style={{ width: '100%', height: '30vh', backgroundColor: 'transparent' }} defaultValue="Write your HTML here"></textarea>
            </div>
            
            <div className='' style={{ justifyContent: 'center', display: 'flex' }}>
                <button className='mt-4 mb-4' style={{ backgroundColor: '#e68f71', width: '25%'}}>CONVERT</button>
            </div>

            <div>
                <label style={{ fontSize: '16px', fontWeight: 'bold'  }}>Your JSX</label>
                <textarea style={{ width: '100%', height: '30vh', backgroundColor: 'transparent' }} defaultValue="Your Jsx will be here"></textarea>
            </div>
        </div>
    </>
  )
}
