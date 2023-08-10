import * as SliderComponent from '@radix-ui/react-slider';
import classes from './Slider.module.scss';

interface SliderProps {
  value: number[];
  onChange: (value: number[]) => void;
  min: number;
  max: number;
}

function Slider({ value, onChange, min, max }: SliderProps) {
  return (
    <SliderComponent.Root
      className={classes.sliderRoot}
      value={value}
      onValueChange={onChange}
      min={min}
      max={max}
    >
      <SliderComponent.Track className={classes.sliderTrack}>
        <SliderComponent.Range className={classes.sliderRange} />
      </SliderComponent.Track>
      <SliderComponent.Thumb className={classes.sliderThumb} />
    </SliderComponent.Root>
  );
}

export default Slider;
