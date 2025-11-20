import { registerSheet } from 'react-native-actions-sheet';
import ExamActionSheet from "./sheetContent/ExamActionSheet";
import ExamSheet from './sheetContent/ExamSheet';

registerSheet('exam-action-sheet', ExamActionSheet)
registerSheet('exam-sheet', ExamSheet);