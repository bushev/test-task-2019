/**
 * Интерфейс одной таски
 */
export interface ITask {
  // id таски
  id: string;
  // имя таски
  name: string;
  // дата создания таски
  createdAt: string;
  // время последнего обновления таски
  updatedAt: string;
}
