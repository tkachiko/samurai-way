import React, {ChangeEvent, FC, useEffect, useState} from 'react'

type ProfileStatusPropsType = {
  status: string
  updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks: FC<ProfileStatusPropsType> = (props) => {
  const [editMode, setEditMode] = useState<boolean>(false)
  const [status, setStatus] = useState<string>(props.status)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const activateEditMode = () => {
    setEditMode(true)
  }
  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value)
  }

  return (
    <>
      {!editMode &&
        <div>
          <span onDoubleClick={activateEditMode}>{props.status || '------'}</span>
        </div>
      }
      {editMode &&
        <div>
          <input type="text"
                 autoFocus
                 onBlur={deactivateEditMode}
                 onChange={onStatusChange}
                 value={status} />
        </div>
      }
    </>
  )
}