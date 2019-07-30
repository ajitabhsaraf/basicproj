<ng-container *ngIf="false">
        <div style="float : left">
          
         <textarea name="type bulk data here" [(ngModel)]="bulkTxt" cols="50" rows="50"></textarea> 
         
        
        </div>
        
        <div style="float : center">
            <input style="align-content:  right" type="button" value="EXTRACT EMAILS" (click)="checkEmailFormat();">
            <input style="align-content:  right" type="button" value="EXTRACT PHONE NUMBERS" (click)="extractPhoneNumbers();">
        </div>
        
        <!-- <div style="-webkit-animation-fill-mode: forwards" *ngFor="let emailExistence of emailExistenceArray">
          {{emailExistence == true ? 'yes' : 'no'}}
        </div> -->
        
        
        <!-- 
        <div style="-webkit-animation-fill-mode: forwards">
          {{bulkEmails}}
        </div> -->
        <div style="float : right">
        <textarea cols="50" rows="50" [(ngModel)]="bulkData">
        </textarea>
        </div>
        
        
        </ng-container>
        
        
        <div>
            <form #columnForm="ngForm">
              <fieldset>
          <label>ENTER COLUMN NAME HERE</label>
          <div>
          <input type="text" value="HEADER name" name="HEADERname" id="headerName" [(ngModel)]="column.headerName"
          required #HeaderName="ngModel" placeholder="HEADER name">
        </div>
        </fieldset>
        <fieldset>
            <label>ENTER YOUR CONTENT HERE</label>
            <div>
          <textarea name="massTextRecord" required #Contents="ngModel" id="massTextRecord" cols="30" rows="10" [(ngModel)]="column.content"></textarea>
        </div>
        </fieldset>
        <fieldset>
            <label>CONVERT MASS TEXT INTO</label>
            <div>
                <input type="radio" #Format="ngModel" required name="FORMAT" [(ngModel)]="format" value="email" (click)="checkEmailFormat(Contents)"> EMAIL<br>
                <input type="radio" #Format="ngModel" required name="FORMAT" [(ngModel)]="format" value="phoneNo" (click)="extractPhoneNumbers(Contents);"> PHONE NUMBER<br>
                <input type="radio" #Format="ngModel" required name="FORMAT" [(ngModel)]="format" value="nothing"> NOTHING  
        </div>
        </fieldset>
        <fieldset>
            <input type="button"  value="ADD CONTENT" (click)="addColumn(); columnForm.reset();" class="btn btn-success">
          <input type="button"  value="SUBMIT CONTENT" (click)="onSubmitColumn(); columnForm.reset();" class="btn btn-success" [disabled]="!columnForm.valid">
        </fieldset>
        </form>
        </div>  
            <div style="float: left">
              <ul>
                <li [class.selected]="hero === selectedHero" *ngFor="let column of table ; index as i; trackBy : trackByFn;"  (click)="onSelect(column)">
                  {{i}}  
                  <span class="badge">{{column.headerName}}</span>
                    <input type="button"  value="DELETE" (click)="deleteHeader(i); columnForm.reset();"> 
                </li>
              </ul>
            </div>
        <div>
            <fieldset>
              <input type="button" value="GENERATE TABLE" [disabled]="!table.length" (click)="generateTable()">
            </fieldset>
        
          </div>
          