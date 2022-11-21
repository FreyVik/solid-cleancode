(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const filesToEvaluate = [
        { id: 1, isEvaluated: false },
        { id: 2, isEvaluated: false },
        { id: 3, isEvaluated: true },
        { id: 4, isEvaluated: false },
        { id: 5, isEvaluated: false },
        { id: 7, isEvaluated: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const filesToDelete = filesToEvaluate.map( file => file.isEvaluated );

    
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea
        
    // día de hoy - today
    const today = new Date();
    
    // días transcurridos - elapsed time in days
    const passedDays: number = 23;
    
    // número de archivos en un directorio - number of files in directory
    const pathFiles = 33;
    
    // primer nombre - first name
    const name = 'Fernando';
    
    // primer apellido - last name
    const lastName = 'Herrera';

    // días desde la última modificación - days since modification
    const daysFromLastUpdate = 12;
    
    // cantidad máxima de clases por estudiante - max classes per student
    const maxClassesPerStudent = 6;


})();




