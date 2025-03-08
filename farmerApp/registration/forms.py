from django import forms
from .models import Register

class RegistrationForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput(), required=True)  # Hide password input

    class Meta:
        model = Register
        fields = ['first_name', 'email', 'phone_no', 'password', 'address', 'zip_code', 'role']

    def save(self, commit=True):
        user = super().save(commit=False)
        user.set_password(self.cleaned_data["password"])  # ✅ Hash the password
        if commit:
            user.save()
        return user
