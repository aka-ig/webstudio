import axios from 'axios';

export function getProjectList() {
  return new Promise((resolve, reject) => {
    fetch('/api/projects')
  });
}
