import classes from './PasswordStrength.module.scss';

function LevelIndicator({ level }: { level: number }) {
  const colorSet = ['red', 'orange', 'yellow', 'green'];

  const colors = new Array(4).fill('white').map((value, index) => {
    if (index <= level) {
      return colorSet[level];
    }
    return value;
  });

  return (
    <div className={classes.levelIndicator}>
      {colors.map((color, index) => (
        <span className={classes[color]} key={index}></span>
      ))}
    </div>
  );
}

function PasswordStrength({ level }: { level: number }) {
  const texts = ['TOO WEAK!', 'WEAK', 'MEDIUM', 'STRONG'];

  return (
    <div className={classes.strengthWrapper}>
      <span>STRENGTH</span>
      <div className={classes.strength}>
        <span className={classes.level}>{texts[level]}</span>
        <LevelIndicator level={level} />
      </div>
    </div>
  );
}

export default PasswordStrength;
