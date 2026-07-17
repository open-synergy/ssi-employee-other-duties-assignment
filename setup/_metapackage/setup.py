import setuptools

with open('VERSION.txt', 'r') as f:
    version = f.read().strip()

setuptools.setup(
    name="odoo14-addons-open-synergy-ssi-employee-other-duties-assignment",
    description="Meta package for open-synergy-ssi-employee-other-duties-assignment Odoo addons",
    version=version,
    install_requires=[
        'odoo14-addon-ssi_employee_other_duties_assignment',
        'odoo14-addon-ssi_employee_other_duties_assignment_operating_unit',
    ],
    classifiers=[
        'Programming Language :: Python',
        'Framework :: Odoo',
        'Framework :: Odoo :: 14.0',
    ]
)
