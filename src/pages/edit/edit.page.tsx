import { ComponentHeader } from '../../components';
import ComponentCanvas from '../../components/canvas/canvas.component';
import ComponentCategory from '../../components/category/category.component';
import ComponentWizard from '../../components/wizard/wizard.component';
import './edit.page.scss';

export function PageEdit() {
    return (
        <div className='ws-page-edit flex-column'>
            <ComponentHeader />
            <div className='flex-this flex-row'>
              <ComponentCategory />
              <ComponentCanvas />
              <ComponentWizard />
            </div>
        </div>
    );
}


