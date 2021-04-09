const Sprite = (dSprite, sSprite) => (
    `<div class='center'>
        <img src='${dSprite}' width="300" onerror="this.style.display='none'">
        <img src='${sSprite}' width="300" onerror="this.style.display='none'">
    </div>
    <hr>`
)

export default Sprite;