import React from 'react'
import {
  CalendarViewDay,
  CalendarToday,
  TripOrigin,
  LocationOn,
  AddLocation,
  Star,
  Redo,
  PieChart,
  CloudDownload,
  BubbleChart,
  ShowChart,
  FormatAlignJustify,
  ClearAll,
  OndemandVideo,
  KeyboardVoice,
  Autorenew,
  MenuBook,
  Add,
  PlayArrow,
  MailOutline,
  TrendingDown,
  Tune,
  ArrowForward,
  Subject,
  IosShare
} from '@mui/icons-material'
import has from 'lodash'

const MuiIcon = props => {
  const MuiIcons = {
    Add: Add,
    AddLocation: AddLocation,
    ArrowForward: ArrowForward,
    Autorenew: Autorenew,
    BubbleChart: BubbleChart,
    CalendarViewDay: CalendarViewDay,
    CalendarToday: CalendarToday,
    ClearAll: ClearAll,
    CloudDownload: CloudDownload,
    TripOrigin: TripOrigin,
    LocationOn: LocationOn,
    MenuBook: MenuBook,
    IosShare: IosShare,
    Star: Star,
    Redo: Redo,
    PieChart: PieChart,
    ShowChart: ShowChart,
    FormatAlignJustify: FormatAlignJustify,
    OndemandVideo: OndemandVideo,
    KeyboardVoice: KeyboardVoice,
    PlayArrow: PlayArrow,
    MailOutline: MailOutline,
    TrendingDown: TrendingDown,
    Tune: Tune,
    Subject: Subject,
  }
  if (has(MuiIcons, props.iconName)) {
    const MuiIconComponent = MuiIcons[props.iconName]
    return <MuiIconComponent />
  } else {
    return <div />
  }
}

export default MuiIcon
