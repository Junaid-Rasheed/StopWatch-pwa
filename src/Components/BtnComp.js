import React from 'react'
import { Button } from '@material-ui/core'

export const BtnComp = ({start,stop,reset}) => {
    return (
      <div>
        <Button
          onClick={start}
          variant="outlined"
          style={{ width: "25%" }}
          color="secondary"
        >
          Start
        </Button>
        <br />
        <br />
       
        <Button
          onClick={stop}
          variant="outlined"
          style={{ width: "25%" }}
          color="secondary"
        >
          Stop
        </Button>
        <br />
        <br />
        <Button
          onClick={reset}
          variant="outlined"
          style={{ width: "25%" }}
          color="secondary"
        >
          Reset
        </Button>
      </div>
    );
}
