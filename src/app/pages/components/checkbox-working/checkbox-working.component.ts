import {
  Component,
  AfterViewInit,
  Input,
  forwardRef,
  ViewChild,
  ElementRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-checkbox-working',
  standalone: true,
  templateUrl: './checkbox-working.component.html',
  styleUrl: './checkbox-working.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxWorkingComponent),
      multi: true,
    },
  ],
})
export class CheckboxWorkingComponent
  implements AfterViewInit, ControlValueAccessor
{
  @Input() label: string = 'Opção';
  @Input() id: string = `checkbox-${Math.floor(Math.random() * 100000)}`;

  @ViewChild('checkboxInput') checkboxInput!: ElementRef<HTMLInputElement>;

  value: boolean = false;

  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(obj: any): void {
    this.value = obj;
    if (this.checkboxInput) {
      this.checkboxInput.nativeElement.checked = this.value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    if (this.checkboxInput) {
      this.checkboxInput.nativeElement.disabled = isDisabled;
    }
  }

  ngAfterViewInit(): void {
    const brCheckbox = this.checkboxInput.nativeElement.closest('.br-checkbox');
    if (brCheckbox) {
      new (window as any).core.BRCheckbox('br-checkbox', brCheckbox);
    }
  }

  toggleChecked(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.checked;
    this.onChange(this.value);
    this.onTouched();
  }
}
