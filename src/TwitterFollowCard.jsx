import { useState } from "react";
import "./app.css";

function TwitterFollowCard({formatUsername, userName, name, avatar }) {

    const [isFollowing, setIsFolloging] = useState(false)
  const avatarUser = `https://unavatar.io/${avatar}`;
  const text = isFollowing ? 'Siguiendo' : 'Seguir';
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';

  const handlerClick = () => {
    setIsFolloging(!isFollowing)
  }
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={avatarUser}
          alt="El avatar prueba"
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUsername">{formatUsername(userName)}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handlerClick}>{text}</button>
      </aside>
    </article>
  );
}

export default TwitterFollowCard;
