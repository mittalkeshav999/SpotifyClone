import React from 'react'
import SongRow from './SongRow.js'
import "./Body.css"
import Header from './Header'
import { PlayCircleFilled } from '@mui/icons-material'
import { Favorite } from '@mui/icons-material'
import { MoreHoriz } from '@mui/icons-material'
import { useDataLayerValue } from './DataLayer'
// import { FavoriteOutlined, MoreHoriz, PlayCircleFilled } from '@mui/icons-material'
    
function Body(spotify) {
  const[{discover_weekly},dispatch] = useDataLayerValue()
  return (
    <div className='body'>
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description }</p>
          
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilled className='body__shuffle' />
          <Favorite fontSize='large' />
          <MoreHoriz/>
        </div>
          {discover_weekly?.tracks.items.map(item => (
            <SongRow track={item.track}/>
          ))}
      </div>
    </div>
  )
}

export default Body