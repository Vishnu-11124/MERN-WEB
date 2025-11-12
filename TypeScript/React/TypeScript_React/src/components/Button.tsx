type BtnData = {
    btnText : string,
    login : () => void,
    disabled : boolean
}

const Button = ({btnText, login, disabled} : BtnData) => {
  return (
    <div>
      <button className="border p-2" disabled={disabled} onClick={login}>{btnText}</button>
    </div>
  )
}

export default Button
