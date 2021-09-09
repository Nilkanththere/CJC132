import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(empname:string, gender: string): any {



    if(gender=="male")
    {
 
         return "Mr."+empname;

    }

else if(gender=="female")
{

   return "Miss."+empname

}

else
{
      return ""+empname;
}



    
  }

}
