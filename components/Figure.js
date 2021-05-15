import React from 'react'
import classes from './style.module.css';


const Figure = ({ wrongLetters }) => {
  const errors = wrongLetters.length

  return (
    <>
      <section className={classes.figure}>
        <svg height="110" width="500" className={classes.figure_container}>
          <line strokeWidth="20" x1="0" y1="20" x2="180" y2="20" strokeLinecap="round" />
          <line strokeWidth="20" x1="140" y1="100" x2="140" y2="20" strokeLinecap="round" />
        </svg>
        <section className={classes.box}>
          <section className={classes.allbody}>
            <div className={classes.Head_Neck}>
              {errors > 0 && <img className={classes.Head} src='/images/0.png' />}
              {errors > 1 && <img className={classes.Neck} src='/images/1.png' />}
            </div>
            <div className={classes.body_Handed}>
              {(errors > 6) ? <img className={classes.rightHanded} src='/images/6.png' /> : <div className={classes.rightHanded} />}
              {(errors > 4) ? <img className={classes.leftArm} src='/images/4.png' /> : <div className={classes.leftArm}  />}
              {errors > 2 && <img className={classes.body} src='/images/2.png' />}
              {(errors > 3) ? <img className={classes.rightArm} src='/images/3.png' /> : <div className={classes.rightArm}/>}
              {(errors > 5) ? <img className={classes.leftHanded} src='/images/5.png' /> : <div className={classes.leftHanded} />}
            </div>
            <section className={classes.foots_legs}>
              <div className={classes.legs}>
                {(errors > 8) ? <img className={classes.rightLeg} src='/images/8.png' /> : <div className={classes.rightLeg}/>}
                {errors > 7 && <img className={classes.leftLeg} src='/images/7.png' />}
              </div>
              <div className={classes.Foots}>
                {(errors > 10) ? <img className={classes.rightFoot} src='/images/10.png' /> : <div className={classes.rightFoot} />}
                {errors > 9 && <img className={classes.leftFoot}  src='/images/9.png' />}
              </div>
            </section>
          </section>
        </section>
      </section>
    </>
  )
}

export default Figure
