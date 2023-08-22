import { LIST_SKILL } from '@/constants';
import { GridLayout } from '@/layout';
import { UiIcon } from '@/components';

const size = 80;

function UiSkill(): JSX.Element {
  return (
    <GridLayout sizeMin={size}>
      {LIST_SKILL.map((item) => (
        <UiIcon icon={item} size={size} code={true} key={item} title={item}/>
      ))}
    </GridLayout>
  );
}

export default UiSkill;
