// Mock data para horários do usuário - HobbyMap

export interface ScheduleGrid {
  [hour: string]: {
    seg: boolean;
    ter: boolean;
    qua: boolean;
    qui: boolean;
    sex: boolean;
    sab: boolean;
    dom: boolean;
  };
}

// Horários das 6h às 22h (principais)
export const hours = [
  '06:00', '07:00', '08:00', '09:00', '10:00', '11:00',
  '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
  '18:00', '19:00', '20:00', '21:00', '22:00'
];

// Horários extras (23h às 5h)
export const extraHours = [
  '23:00', '00:00', '01:00', '02:00', '03:00', '04:00', '05:00'
];

export const daysOfWeek = ['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom'];
export const daysLabels = ['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB', 'DOM'];

// Mock inicial - alguns horários marcados
export const userScheduleGrid: ScheduleGrid = {
  '06:00': { seg: false, ter: false, qua: false, qui: false, sex: false, sab: false, dom: false },
  '07:00': { seg: false, ter: false, qua: false, qui: false, sex: false, sab: false, dom: false },
  '08:00': { seg: false, ter: false, qua: false, qui: false, sex: false, sab: false, dom: false },
  '09:00': { seg: true, ter: true, qua: true, qui: false, sex: true, sab: false, dom: false },
  '10:00': { seg: true, ter: true, qua: true, qui: false, sex: true, sab: false, dom: false },
  '11:00': { seg: true, ter: true, qua: true, qui: false, sex: false, sab: false, dom: false },
  '12:00': { seg: false, ter: false, qua: false, qui: false, sex: false, sab: false, dom: false },
  '13:00': { seg: false, ter: false, qua: false, qui: false, sex: false, sab: false, dom: false },
  '14:00': { seg: true, ter: true, qua: true, qui: true, sex: false, sab: false, dom: false },
  '15:00': { seg: true, ter: true, qua: true, qui: true, sex: false, sab: false, dom: false },
  '16:00': { seg: true, ter: true, qua: true, qui: true, sex: false, sab: false, dom: false },
  '17:00': { seg: true, ter: true, qua: true, qui: true, sex: false, sab: false, dom: false },
  '18:00': { seg: false, ter: false, qua: false, qui: false, sex: false, sab: false, dom: false },
  '19:00': { seg: false, ter: false, qua: false, qui: false, sex: false, sab: false, dom: false },
  '20:00': { seg: false, ter: false, qua: false, qui: false, sex: false, sab: false, dom: false },
  '21:00': { seg: false, ter: false, qua: false, qui: false, sex: false, sab: false, dom: false },
  '22:00': { seg: false, ter: false, qua: false, qui: false, sex: false, sab: false, dom: false },
  '23:00': { seg: false, ter: false, qua: false, qui: false, sex: false, sab: false, dom: false },
  '00:00': { seg: false, ter: false, qua: false, qui: false, sex: false, sab: false, dom: false },
  '01:00': { seg: false, ter: false, qua: false, qui: false, sex: false, sab: false, dom: false },
  '02:00': { seg: false, ter: false, qua: false, qui: false, sex: false, sab: false, dom: false },
  '03:00': { seg: false, ter: false, qua: false, qui: false, sex: false, sab: false, dom: false },
  '04:00': { seg: false, ter: false, qua: false, qui: false, sex: false, sab: false, dom: false },
  '05:00': { seg: false, ter: false, qua: false, qui: false, sex: false, sab: false, dom: false },
};
