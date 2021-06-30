import React, { useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './widget-list.component.scss';
import { IWidgetDictionaryItem, WidgetDictionary } from '../../widgets/dictionary';

export function ComponentWidgetList() {

  const [searchText, setsearchText] = useState('');

  function handleDragStart(event: React.DragEvent<HTMLDivElement>, widget: IWidgetDictionaryItem) {
    event.dataTransfer.setData('text', widget.name);
  }

  return (
    <div className='ws-component-widget-list flex-column flex-this'>
      <div className='input-group input-group-sm search-container'>
        <input className='form-control' value={searchText} onChange={e => setsearchText(e.target.value)} />
        <div className="input-group-append">
          <span className="input-group-text">
            <FontAwesomeIcon className='search-icon' icon={faSearch} />
          </span>
        </div>
      </div>
      <div className='flex-this widget-list-container'>
        {WidgetDictionary.filter(widget => widget.label.toLowerCase().indexOf(searchText) > -1).map(widget => (
          <div className='widget-item' key={widget.name} draggable='true' onDragStart={e => handleDragStart(e, widget)}>
            <FontAwesomeIcon className='widget-icon' icon={widget.icon} />
            <label className='widget-label'>{widget.label}</label>
          </div>
        ))}
      </div>
    </div>
  )
}
