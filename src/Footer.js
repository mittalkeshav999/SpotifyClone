import React from 'react'
import "./Footer.css"
import { PlayCircleOutline } from '@mui/icons-material'
import { SkipPrevious } from '@material-ui/icons'
import { SkipNext } from '@mui/icons-material'
import { Shuffle } from '@mui/icons-material'
import { Repeat } from '@mui/icons-material'
import { PlaylistPlay } from '@mui/icons-material'
import { VolumeDown } from '@mui/icons-material'
import { Grid,Slider } from '@mui/material'

function Footer() {
  return (
    <div className='footer' >
      <div className="footer__left">
        <img className='footer__albumLogo' 
        src="https://larrysolberg.blogspot.com/2021/07/the-weeknd-albums-covers.html" alt="" />
        <div className="footer__songInfo">
          <h4>No song is playing</h4>
          <p>...</p>
        </div>
      </div>
      <div className="footer__center">
        <Shuffle className="footer__green" />
        <SkipPrevious className='footer__icon' />
        <PlayCircleOutline fontSize='large' className='footer__icon'/>
        <SkipNext  className='footer__icon' />
        <Repeat className='footer__green' />
      </div>
      <div className="footer__right">
      <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer