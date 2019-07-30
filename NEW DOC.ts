<ng-container *ngIf="false">
        <div style="float : left">
          
         <textarea name="type bulk data here" [(ngModel)]="bulkTxt" cols="50" rows="50"></textarea> 
         
        
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
              </ul>
            </div>
        <div>
            <fieldset>
              <input type="button" value="GENERATE TABLE" [disabled]="!table.length" (click)="generateTable()">
            </fieldset>
        
          </div>
          